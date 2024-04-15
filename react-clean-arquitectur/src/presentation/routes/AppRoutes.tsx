import { NotFound } from "@presentation/components/base/NotFound"
import DefaultLayout from "@presentation/layouts/DefaultLayout"
import TaskPage from "@presentation/pages/TaskPage"
import { Route, Routes } from "react-router-dom"
 
const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />} >
                <Route path="/" element={<TaskPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default AppRoutes