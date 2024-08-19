import React from 'react';
import '../styles/LetterTable.css';

function LetterTable({ columnsToShow, selectedColumns, handleColumnSelection, columns }) {
  return (
    <table className="letter-table">
      <thead>
        <tr>
          {columnsToShow.map((columnKey) => (
            <th
              key={columnKey}
              className={`letter-cell ${selectedColumns.includes(columnKey) ? 'selected-column' : ''}`}
              onClick={() => handleColumnSelection(columnKey)}
            >
              <div className="letter-box">
                {columns[columnKey].map((letter) => (
                  <div key={letter.tamil} className="letter-item">
                    <span className="tamil-letter">{letter.tamil}</span>
                    <span className="romanized-letter">{letter.romanized}</span>
                  </div>
                ))}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
}

export default LetterTable;
