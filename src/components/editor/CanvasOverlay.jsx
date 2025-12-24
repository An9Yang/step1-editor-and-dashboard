import React, { useRef, useState, useEffect } from 'react';

function CanvasOverlay({ activeTool }) {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    // Store drawings as paths: { type: 'path', points: [{x, y}] }
    // Store boxes as: { type: 'box', start: {x, y}, end: {x, y} }
    // Store text as: { type: 'text', x, y, content: 'Text' }
    const [shapes, setShapes] = useState([]);
    const [currentShape, setCurrentShape] = useState(null);

    useEffect(() => {
        // Redraw canvas whenever shapes change
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Resize canvas to match parent
        const parent = canvas.parentElement;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw all stored shapes
        shapes.forEach(shape => drawShape(ctx, shape));

        // Draw current shape being created
        if (currentShape) {
            drawShape(ctx, currentShape);
        }

    }, [shapes, currentShape]);

    const drawShape = (ctx, shape) => {
        ctx.strokeStyle = '#ef4444'; // Red color for annotations
        ctx.fillStyle = '#ef4444';
        ctx.lineWidth = 3;

        if (shape.type === 'path') {
            if (shape.points.length < 2) return;
            ctx.beginPath();
            ctx.moveTo(shape.points[0].x, shape.points[0].y);
            for (let i = 1; i < shape.points.length; i++) {
                ctx.lineTo(shape.points[i].x, shape.points[i].y);
            }
            ctx.stroke();
        } else if (shape.type === 'box') {
            const width = shape.end.x - shape.start.x;
            const height = shape.end.y - shape.start.y;
            ctx.strokeRect(shape.start.x, shape.start.y, width, height);

            // Add semi-transparent fill for selection feel
            ctx.fillStyle = 'rgba(239, 68, 68, 0.1)';
            ctx.fillRect(shape.start.x, shape.start.y, width, height);
        } else if (shape.type === 'text') {
            ctx.font = '16px Inter, sans-serif';
            ctx.fillStyle = '#ef4444';
            ctx.fillText(shape.content, shape.x, shape.y);
            // Draw a small box around it to indicate it's an object
            const metrics = ctx.measureText(shape.content);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 1;
            ctx.strokeRect(shape.x - 4, shape.y - 16, metrics.width + 8, 24);
        }
    };

    const getPoint = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseDown = (e) => {
        if (activeTool === 'cursor') return;

        // For text tool, click creates the item immediately
        if (activeTool === 'text') {
            const point = getPoint(e);
            // In a real app, this would open an input. For prototype, we add placeholder.
            const textShape = { type: 'text', x: point.x, y: point.y, content: 'Add comment...' };
            setShapes(prev => [...prev, textShape]);
            return;
        }

        setIsDrawing(true);
        const startPoint = getPoint(e);

        if (activeTool === 'pen') {
            setCurrentShape({ type: 'path', points: [startPoint] });
        } else if (activeTool === 'box') {
            setCurrentShape({ type: 'box', start: startPoint, end: startPoint });
        }
    };

    const handleMouseMove = (e) => {
        if (!isDrawing || !currentShape) return;
        const point = getPoint(e);

        if (activeTool === 'pen') {
            setCurrentShape(prev => ({
                ...prev,
                points: [...prev.points, point]
            }));
        } else if (activeTool === 'box') {
            setCurrentShape(prev => ({
                ...prev,
                end: point
            }));
        }
    };

    const handleMouseUp = () => {
        if (isDrawing && currentShape) {
            setShapes(prev => [...prev, currentShape]);
            setCurrentShape(null);
        }
        setIsDrawing(false);
    };

    return (
        <div className={`absolute inset-0 z-50 overflow-hidden ${activeTool === 'cursor' ? 'pointer-events-none' : 'pointer-events-auto'}`}>
            <canvas
                ref={canvasRef}
                className={`w-full h-full ${activeTool === 'cursor' ? 'cursor-default' : 'cursor-crosshair'}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            />
            {/* Helper text if no shapes yet */}
            {shapes.length === 0 && !isDrawing && activeTool !== 'cursor' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs pointer-events-none opacity-50 select-none">
                    {activeTool === 'pen' ? 'Draw freehand' : activeTool === 'box' ? 'Drag to box' : 'Click to add text'}
                </div>
            )}
        </div>
    );
}

export default CanvasOverlay;
