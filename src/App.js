import DashboardLayout from "./components/DashboardLayout/DashboardLayout";


export function App() {
  return <div style={{
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: 'column',
    height: '100vh'
  }}><DashboardLayout>
    Кудин оказался не бесполезным...
    </DashboardLayout></div >;
}