

const MenuComponent = ({menu}) => {
    const {price , recipe ,image ,name} = menu ;

    return (
        <div className=" flex space-x-5">
            <img style={{borderRadius:" 0 200px 200px 200px"}} className=" w-[100px]" src={image} alt="img" />
            <div>
                <h1>{name}</h1>
                <h2>{recipe}</h2>
            </div>
            <p className=" text-yellow-500">{price}</p>
            
        </div>
    );
};

export default MenuComponent;