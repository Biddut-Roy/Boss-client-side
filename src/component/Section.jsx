

const Section = ({subhedding , hedding}) => {
    return (
        <div>
            <p className=" text-yellow-500 ">---{subhedding}---</p>
            <h1 className=" uppercase text-3xl">{hedding}</h1>
        </div>
    );
};

export default Section;