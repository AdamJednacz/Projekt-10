import React, {useState, useEffect} from 'react';
import carsData from './cars.json'; // Import danych z pliku JSON

const Select = () => {
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedModelYear, setSelectedModelYear] = useState('');
    const [selectedModelHP, setSelectedModelHP] = useState('');

    useEffect(() => {
        const extractedBrands = carsData.map(car => car.brand);
        setBrands([...new Set(extractedBrands)]);
    }, []);

    const handleBrandChange = (event) => {
        const selectedBrand = event.target.value;
        setSelectedBrand(selectedBrand);
        const selectedBrandObject = carsData.find(car => car.brand === selectedBrand);

        setModels(selectedBrandObject ? selectedBrandObject.models.map(model => model.name) : []);
        // Po zmianie marki wybrany model i rok są czyszczone
        setSelectedModel('');
        setSelectedModelYear('');
        setSelectedModelHP('');
    };

    const handleModelChange = (event) => {
        const selectedModel = event.target.value;
        setSelectedModel(selectedModel);

        // Znajdź obiekt reprezentujący wybrany model z danych samochodów
        const selectedBrandObject = carsData.find(car => car.brand === selectedBrand);
        const selectedModelObject = selectedBrandObject.models.find(model => model.name === selectedModel);

        // Ustaw rok wybranego modelu
        setSelectedModelYear(selectedModelObject ? selectedModelObject.year : '');
        setSelectedModelHP(selectedModelObject ? selectedModelObject.hp : '');
    };

    return (
        <section className="select">
            <div className="container">
                <div>
                    <div className="select_wrapper">
                        <select onChange={handleBrandChange} value={selectedBrand}>
                            <option value="" disabled hidden>Brand</option>
                            {brands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select_wrapper">
                        <select onChange={handleModelChange} value={selectedModel}>
                            <option value="" disabled hidden>Model</option>
                            {models.map(model => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select_text">
                        <p>Year:{selectedModelYear}</p>
                        <p>Horse Power:{selectedModelHP}</p>
                    </div>
                </div>
                {/*<img src={} alt={}/>*/}
            </div>
        </section>
    );
};

export default Select;
