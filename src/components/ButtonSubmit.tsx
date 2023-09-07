interface Props {
  isValid: boolean
}

export const ButtonSubmit = ({isValid}: Props) => {
  return (
    <button
      className={`text-lime-50 p-3 rounded-md font-semibold mb-5 ${isValid ? 'bg-gray-700 cursor-pointer hover:bg-orange-700': 'bg-gray-400 cursor-not-allowed'}`}
      type="submit"
      disabled={!isValid}
    >
      Subscribe to monthly newsletter
    </button>
  );
};
