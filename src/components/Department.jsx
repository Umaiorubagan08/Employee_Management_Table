import React from 'react';

const departments = [
    { id: 1, name: "HR", manager: "Ganesan", employeeCount: 20 },
    { id: 2, name: "Development", manager: "Muthukumaran", employeeCount: 50 },
    { id: 3, name: "Marketing", manager: "Manoj", employeeCount: 30 },
    { id: 4, name: "Sales", manager: "Kelvin", employeeCount: 25 },
    { id: 5, name: "IT", manager: "Balaji", employeeCount: 15 },
];

export default function Department() {
    // Function to assign background color based on the department name
    const getRowColor = (departmentName) => {
        switch(departmentName) {
            case 'HR':
                return '#f7c1c1';  // Light Red for HR
            case 'Development':
                return '#d1f7c1';  // Light Green for Development
            case 'Marketing':
                return '#c1d9f7';  // Light Blue for Marketing
            case 'Sales':
                return '#f7e1a1';  // Light Yellow for Sales
            case 'IT':
                return '#d1c1f7';  // Light Purple for IT
            default:
                return '#ffffff';  // Default white for other departments
        }
    };

    return (
        <div style={{
            padding: "30px", 
            fontFamily: "Poppins, sans-serif", 
            backgroundColor: "#f9f9f9", 
            borderRadius: "8px", 
            color: "#333", 
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
            transition: "all 0.3s ease-in-out", 
            margin: "auto", 
            maxWidth: "1200px"
        }}>
            <h1 style={{ 
                fontSize: "2.5rem", 
                color: "#2c3e50", 
                textTransform: "uppercase", 
                textAlign: "center", 
                marginBottom: "20px",
                letterSpacing: "1px",
                fontWeight: "bold"
            }}>
                Departments in Our Company
            </h1>
            <p style={{
                fontSize: "1rem", 
                color: "#555", 
                textAlign: "justify", 
                marginBottom: "30px",
                lineHeight: "1.6"
            }}>
                We have several departments within the company, each managed by experienced leaders and contributing to the growth of the organization.
            </p>

            <table style={{
                width: "100%", 
                borderCollapse: "collapse", 
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: "#3498db", 
                        color: "black", 
                        textAlign: "left"
                    }}>
                        <th style={{
                            padding: "12px", 
                            borderBottom: "2px solid #ddd", 
                            backgroundColor: "grey",
                            fontSize: "1rem",
                            border: "1px solid black"
                        }}>Department Name</th>
                        <th style={{
                            padding: "12px", 
                            borderBottom: "2px solid #ddd", 
                            backgroundColor: "grey",
                            fontSize: "1rem",
                            border: "1px solid black"

                        }}>Manager</th>
                        <th style={{
                            padding: "12px", 
                            borderBottom: "2px solid #ddd", 
                            backgroundColor: "grey",
                            fontSize: "1rem",
                            border: "1px solid black"

                        }}>Employee Count</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(department => (
                        <tr key={department.id} style={{
                            backgroundColor: getRowColor(department.name), // Set dynamic row color
                            transition: "background-color 0.3s ease"
                        }}>
                            <td style={{
                                padding: "12px", 
                                borderBottom: "1px solid #ddd",
                                border: "1px solid black"
                            }}>{department.name}</td>
                            <td style={{
                                padding: "12px", 
                                borderBottom: "1px solid #ddd",
                                border: "1px solid black"
                            }}>{department.manager}</td>
                            <td style={{
                                padding: "12px", 
                                borderBottom: "1px solid #ddd",                                
                                border: "1px solid black"
                            }}>{department.employeeCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
