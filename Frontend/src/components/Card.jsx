const Card = ({ icon, title, count, color }) => {
    return (
      <div className={`bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 border-t-4 ${color}`}>
        <div className="text-3xl">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold">{count}+</h4>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  