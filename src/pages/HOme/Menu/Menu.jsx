
import MenuComponent from "../../shear pages/menuComponent/MenuComponent";
import Section from "../../../component/Section";
import useMenu from "../../../Hooks/useMenu";


const Menu = () => {
    const  [menu] = useMenu();
    const filterCategory = menu.filter(category => category.category === 'popular')
        // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const filterCategory = data.filter(category => category.category === 'popular')
    //             setMenu(filterCategory)
    //         })
    // }, []);
    return (
        <div className=" my-10">
            <section className=" my-4">
                <Section
                    subhedding="Check it out"
                    hedding={'From Our menu'}
                ></Section>
            </section>
            <div className=" grid grid-cols-2 gap-5">
                {
                    filterCategory.map(menu => <MenuComponent menu={menu} key={menu._id}></MenuComponent>)
                }
            </div>
        </div>
    );
};

export default Menu;