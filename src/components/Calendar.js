import React, { useState } from 'react';

const Calendar = () => {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const currentYear = new Date().getFullYear();

    const [hoveredDate, setHoveredDate] = useState({ month: null, day: null }); 
    const [selectedDate, setSelectedDate] = useState({ month: null, day: null }); 

    const handleHover = (month, day) => {
        setHoveredDate({ month, day });
    };

    const handleClick = (month, day) => {
        setSelectedDate({ month, day });
    };

    return (
        <>
            <h2 className="text-2xl font-bold p-10 text-center text-black">Calendario {currentYear}</h2>
            <div className="flex flex-col px-5">
                <div className="grid grid-cols-4 gap-4">
                    {months.map((month, index) => (
                        <div key={index} className="bg-bone p-2 rounded shadow">
                            <h3 className="text-sm font-semibold mb-2 text-center text-black">{month}</h3>
                            <div className="flex flex-wrap justify-between">
                                {Array.from({ length: daysInMonth(index, currentYear) }, (_, i) => i + 1).map((day) => {
                                    const isHovered = hoveredDate.month === index && hoveredDate.day === day;
                                    const isSelected = selectedDate.month === index && selectedDate.day === day;
                                    return (
                                        <div
                                            key={day}
                                            className={`w-1/6 mb-1 text-xs text-center py-1 relative cursor-pointer ${isSelected ? 'bg-sage' : isHovered ? 'bg-pale' : ''}`}
                                            onMouseEnter={() => handleHover(index, day)}
                                            onMouseLeave={() => setHoveredDate({ month: null, day: null })}
                                            onClick={() => handleClick(index, day)}
                                        >
                                            {day}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calendar;
