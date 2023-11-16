import img from "../../../../assets/home/featured.jpg"
import Section from "../../../component/Section";
import  "./Feature.css"

const Feature = () => {
    return (
        <div className="bg-img my-10 bg-fixed">
            <section className=" my-10 py-10">
                <Section
                    subhedding={'Check it out'}
                    hedding={'Featured item'}
                ></Section>
            </section>
            <div className=" flex justify-center items-center mx-20 gap-5 pb-36">
                <img className=" w-2/6" src={img} alt="" />
                <div className=" text-white">
                    <h1>March 20, 2023</h1>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente, dolores repellendus debitis non eaque animi, esse delectus adipisci, consequuntur rem consequatur ea voluptatibus reprehenderit tempora. Earum voluptatum dolorum repellat saepe illo distinctio, cum perferendis ex nemo necessitatibus, voluptates libero.</h1>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Feature;