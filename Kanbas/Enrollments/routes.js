import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentRoutes(app) {
    app.get("/api/courses/:courseId/students", async (req, res) => {
        const { courseId } = req.params;
        const students = await enrollmentsDao.findStudentsForCourse(courseId);
        res.json(students);
    });
}
