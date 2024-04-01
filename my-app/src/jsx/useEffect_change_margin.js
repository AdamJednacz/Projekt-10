import { useEffect } from 'react';

const useScrollEffect = (section, itemsRefs) => {
    useEffect(() => {
        const sectionElement = section.current;
        const handleScroll = () => {
            const height = sectionElement.offsetHeight * 2;
            if (window.scrollY > (height - 300)) {
                itemsRefs.forEach(ref => {
                    ref.current.classList.add("change_margin");
                });
                console.log("123");
            } else {
                itemsRefs.forEach(ref => {
                    ref.current.classList.remove("change_margin");
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [section, itemsRefs]);
};

export default useScrollEffect;
