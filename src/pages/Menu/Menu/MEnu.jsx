import { Helmet } from "react-helmet-async";
import Cover from "../../shear pages/Cover/Cover";
import Section from "../../../component/Section";
import useMenu from "../../../Hooks/useMenu";
import MenuComponent from "../../shear pages/menuComponent/MenuComponent";
import imgMenu from "../../../../assets/menu/banner3.jpg"
import dessertImg from "../../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../../assets/menu/soup-bg.jpg"
import { Link } from "react-router-dom";



const MEnu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(category => category.category === 'offered')
    const dessert = menu.filter(category => category.category === 'dessert')
    const pizza = menu.filter(category => category.category === 'pizza')
    const soup = menu.filter(category => category.category === 'soup')
    const salad = menu.filter(category => category.category === 'salad')
    return (
        <div>
            <Helmet>
                <title>BISTRO || MENU</title>
                <link rel="canonical" />
            </Helmet>
            <Cover bImg={imgMenu}></Cover>
            <div className=" my-10">
                <section className=" my-4">
                    <Section
                        subhedding="Do't miss"
                        hedding={"TODAY'S OFFER"}
                    ></Section>
                </section>
                <div className=" grid grid-cols-2 gap-5">
                    {
                        offered.map(menu => <MenuComponent menu={menu} key={menu._id}></MenuComponent>)
                    }
                </div>
            </div>
            <Cover bImg={dessertImg} title={'dessert'}></Cover>
            <div className=" grid grid-cols-2 gap-5 my-10">
                    {
                        dessert.map(menu => <MenuComponent menu={menu} key={menu._id}></MenuComponent>)
                    }
                   <Link to={`/order/${'dessert'}`}> <button className="btn btn-outline border-0 border-b-4">Add to Card</button></Link>
                </div>
                <Cover bImg={pizzaImg} title={'pizza'}></Cover>
            <div className=" grid grid-cols-2 gap-5 my-10">
                    {
                        pizza.map(menu => <MenuComponent menu={menu} key={menu._id}></MenuComponent>)
                    }
                     <Link to={`/order/${'pizza'}`}> <button className="btn btn-outline border-0 border-b-4">Add to Card</button></Link>
                </div>
                <Cover bImg={saladImg} title={'salad'}></Cover>
            <div className=" grid grid-cols-2 gap-5 my-10">
                    {
                        salad.map(menu => <MenuComponent menu={menu} key={menu._id}></MenuComponent>)
                    }
                     <Link to={`/order/${'salad'}`}> <button className="btn btn-outline border-0 border-b-4">Add to Card</button></Link>
                </div>
                <Cover bImg={soupImg} title={'soup'}></Cover>
            <div className=" grid grid-cols-2 gap-5 my-10">
                    {
                        soup.map(menu => <MenuComponent menu={menu} key={menu._id}></MenuComponent>)
                    }
                     <Link to={`/order/${'soup'}`}> <button className="btn btn-outline border-0 border-b-4">Add to Card</button></Link>
                </div>
        </div>
    );
};

export default MEnu;