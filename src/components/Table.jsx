import React, { useState } from "react";
import { data } from './data'; // If you're importing from a file
import './Table.css'; // Import the CSS file

function Table() {
    const [search, setSearch] = useState(""); // Search state
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const rowsPerPage = 4; // Number of rows per page

    // Pagination logic
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Search and Filter Logic
    const filteredData = data.filter((item) => {
        const searchTerm = search.toLowerCase();
        return (
            search === "" ||
            item.first_name.toLowerCase().includes(searchTerm) ||
            item.last_name.toLowerCase().includes(searchTerm) ||
            item.email.toLowerCase().includes(searchTerm) ||
            item.Number.includes(searchTerm)
        );
    });

    const currentData = filteredData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    return (
        <div className="table-container">
            <div className="table-wrapper">
                <h3 className="table-title">Employee Database</h3>
                <form method="post" className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-input"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value); // Update search term
                            setCurrentPage(1); // Reset to the first page on a new search
                        }} 
                    />
                </form>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.length > 0 ? (
                                currentData.map((item) => (
                                    <tr key={item.id}> 
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.Number}</td>
                                        <td>{item.Address}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="no-results">
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="pagination-controls">
                    <button 
                        className="pagination-button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous
                    </button>

                    <span className="pagination-info">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button 
                        className="pagination-button"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Table;
