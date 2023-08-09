export const metadata = {
    title: 'Turbo-Step | Dashboard',
    description: 'Turbo-Step | Dashboard',
  }

const DashboardLayout = ({children}) => {
  return (
    <div>
        <div>sidebar</div>
        {children}
    </div>
  )
}

export default DashboardLayout