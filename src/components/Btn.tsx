interface btnProps {
  text: string;
  onClick: () => void;
}

const Btn = ({ text, onClick }: btnProps) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {text}
    </button>
  );
};

export default Btn;
