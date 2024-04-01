import  {useEffect} from "react";


const UseEffectMove = (section,item,item3) => {

    const subHeight = 100

    useEffect(() => {
        const sectionElement = section.current;
        const handleScroll = () => {
            const elements = item.current;
            const height = sectionElement.offsetHeight;
            if (window.scrollY > (height - subHeight)) {
                elements.classList.add("move1");
                elements.classList.add("show");

            } else {
                elements.classList.remove("move1");
                elements.classList.remove("show");
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [section,item]);



    useEffect(() => {
        const sectionElement = section.current;
        const handleScroll = () => {
            const elements = item3.current;
            const height = sectionElement.offsetHeight;
            if (window.scrollY > (height - subHeight)) {
                elements.classList.add("move3");
                elements.classList.add("show");

            } else {
                elements.classList.remove("move3");
                elements.classList.remove("show");
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [section,item3]);

}



export default UseEffectMove