/* eslint-disable react/prop-types */

const Heading = ({ title, subtitle }) => {
      return (
            <div className="text-center py-8 space-y-3">
                  <h2 className="text-5xl font-semibold">{title}</h2>
                  <p className="text-gray-800 font-semibold text-lg">{subtitle}</p>
            </div>
      );
};

export default Heading;