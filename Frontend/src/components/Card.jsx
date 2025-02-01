const Card = ({ icon, title, count, bgColor }) => {
  return (
    <div className="p-6 flex items-center space-x-4 bg-white rounded-xl ">
      {/* Icon with rounded background */}
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor}`}>
        <div className="text-xl text-white">{icon}</div>
      </div>
      <div>
        <h4 className="text-xl font-bold">{count}+</h4>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default Card;
