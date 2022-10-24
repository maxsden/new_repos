import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import AuthForm from "./components/Сontainers/AuthForm";


export function App() {
  return <div style={{
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: 'column',
    height: '100vh'
  }}><DashboardLayout>
      <AuthForm/>
      </DashboardLayout></div >;
}