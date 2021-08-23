import React from 'react';

const Specification: React.FC = () => {
    return (
        <div className="tabContent-specification">
            <table className="w-100">
                <tbody>
                    <tr>
                        <td>Color</td>
                        <td>Black, Gray</td>
                    </tr>
                    <tr>
                        <td>Style</td>
                        <td>Ear Hook</td>
                    </tr>
                    <tr>
                        <td>Wireless</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>5.5 x 5.5 x 9.5 inches</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>6.61 pounds</td>
                    </tr>
                    <tr>
                        <td>Battery Life</td>
                        <td>20 hours</td>
                    </tr>
                    <tr>
                        <td>Bluetooth</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Specification;