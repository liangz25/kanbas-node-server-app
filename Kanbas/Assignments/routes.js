// Kanbas/Assignments/routes.js
import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/modules/:moduleId/assignments", async (req, res) => {
    const moduleId = req.params.moduleId;
    const assignment = { ...req.body, module: moduleId };
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  });

  app.get("/api/modules/:moduleId/assignments", async (req, res) => {
    const moduleId = req.params.moduleId;
    const assignments = await dao.findAssignmentsForModule(moduleId);
    res.json(assignments);
  });

  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const assignmentId = req.params.assignmentId;
    const assignment = await dao.findAssignmentById(assignmentId);
    res.json(assignment);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const assignmentId = req.params.assignmentId;
    const updates = req.body;
    const status = await dao.updateAssignment(assignmentId, updates);
    res.json(status);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const assignmentId = req.params.assignmentId;
    const status = await dao.deleteAssignment(assignmentId);
    res.json(status);
  });
}
