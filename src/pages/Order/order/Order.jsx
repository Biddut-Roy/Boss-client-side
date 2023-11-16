import Cover from "../../shear pages/Cover/Cover";
import coverImg from "../../../../assets/shop/banner2.jpg"
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../orderTAb/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categoris = ['drinks' ,'dessert', 'pizza' , 'salad' , 'soup']
    const {category}=useParams();
    const intialIdex = categoris.indexOf(category)
    const [indexTab, setIndexTab] = useState(intialIdex);
    const [menu] = useMenu();
    const drinks = menu.filter(category => category.category === 'drinks')
    const dessert = menu.filter(category => category.category === 'dessert')
    const pizza = menu.filter(category => category.category === 'pizza')
    const soup = menu.filter(category => category.category === 'soup')
    const salad = menu.filter(category => category.category === 'salad')
    return (
        <div>
             <Helmet>
                <title>BISTRO || ORDER FOOD</title>
                <link rel="canonical" />
            </Helmet>
            <Cover bImg={coverImg}></Cover>
            <div className=" my-8">
                <Tabs defaultIndex={indexTab} onSelect={(index) => setIndexTab(index)}>
                    <TabList>
                        <Tab>drinks</Tab>
                        <Tab>dessert</Tab>
                        <Tab>pizza</Tab>
                        <Tab>salad</Tab>
                        <Tab>soup</Tab>
                    </TabList>
                    <TabPanel>
                       <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;