import React, {useEffect, useRef} from "react";
import "./StatsSection.css"; // Make sure to import the CSS file

const StatsSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const boxes = containerRef.current?.querySelectorAll(".stat-box");
        if (!boxes) return;

        const handleMouseMove: EventListener = (e) => {
            const mouseEvent = e as MouseEvent;
            boxes.forEach((box) => {
                const {left, top, width, height} = box.getBoundingClientRect();
                const x = mouseEvent.clientX - left;
                const y = mouseEvent.clientY - top;

                (box as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
                (box as HTMLElement).style.setProperty("--mouse-y", `${y}px`);

                box.classList.add("hover");
            });
        };

        const handleMouseLeave = () => {
            boxes.forEach((box) => {
                box.classList.remove("hover");
            });
        };

        boxes.forEach((box) => {
            box.addEventListener("mousemove", handleMouseMove);
            box.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            boxes.forEach((box) => {
                box.removeEventListener("mousemove", handleMouseMove);
                box.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div ref={containerRef} className="stats-container">
            <div className="stat-box">
                <span>Blocks</span> <strong>0</strong>
            </div>
            <div className="stat-box">
                <span>Transactions</span> <strong>0</strong>
            </div>
            <div className="stat-box">
                <span>Active Nodes</span> <strong>0</strong>
            </div>
            <div className="stat-box">
                <span>Avg Block Time</span> <strong>0.0s</strong>
            </div>
        </div>
    );
};

export default StatsSection;
