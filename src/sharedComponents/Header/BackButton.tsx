import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="back-button-container" onClick={() => navigate(-1)}>
      <div className="back-button">
        <div className="arrow-wrap">
          <span className="arrow-part-1"></span>
          <span className="arrow-part-2"></span>
          <span className="arrow-part-3"></span>
        </div>
      </div>
    </div>
  );
};
