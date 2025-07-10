export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonContainer = buttonsContainer || "menu";
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
