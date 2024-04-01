import React from 'react';

const Select = () => {
    return (
        <section className="select">
            <div className="container">
                <form>

                    <select>
                        <option value="" disabled selected hidden>Brand</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Model</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Fuel Type</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Drive</option>
                    </select>
                </form>
            </div>
        </section>
    );
};

export default Select;