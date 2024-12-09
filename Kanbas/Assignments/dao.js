import Database from "../Database/index.js";
import model from "./model.js";
// export function updateAssignment(assignmentId, assignmentUpdates) {
//     const { assignments } = Database;
//     const assignment = assignments.find((assignment) => assignment._id === assignmentId);
//     Object.assign(assignment, assignmentUpdates);
//     return assignment;
//   }
  
// export function findAssignmentsForCourse(courseId) {
//     const { assignments } = Database;
//     return assignments.filter((assignment) => assignment.course === courseId);
// }

// export function createAssignment(assignment) {
//     const newAssignment = { ...assignment, _id: Date.now().toString() };
//     Database.assignments = [...Database.assignments, newAssignment];
//     return newAssignment;
// }
// export function deleteAssignment(assignmentId) {
//     const { assignments } = Database;
//     Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
// }
export const createAssignment = async (assignment) => {
    try {
        return await model.create(assignment);
    } catch (error) {
        console.error("[AssignmentDAO] Error creating assignment:", error);
        throw error;
    }
};

export const findAssignmentsForModule = async (moduleId, page = 1, limit = 10, sort = { createdAt: -1 }) => {
    try {
        const skip = (page - 1) * limit;
        return await model.find({ module: moduleId }).sort(sort).skip(skip).limit(limit);
    } catch (error) {
        console.error("[AssignmentDAO] Error finding assignments for module:", error);
        throw error;
    }
};

export const findAssignmentById = async (assignmentId) => {
    try {
        return await model.findById(assignmentId);
    } catch (error) {
        console.error("[AssignmentDAO] Error finding assignment by ID:", error);
        throw error;
    }
};

export const updateAssignment = async (assignmentId, updates) => {
    try {
        const result = await model.updateOne({ _id: assignmentId }, { $set: updates });
        if (result.nModified === 0) {
            throw new Error(`[AssignmentDAO] No assignment found with ID ${assignmentId}`);
        }
        return result;
    } catch (error) {
        console.error("[AssignmentDAO] Error updating assignment:", error);
        throw error;
    }
};

export const deleteAssignment = async (assignmentId) => {
    try {
        const result = await model.deleteOne({ _id: assignmentId });
        if (result.deletedCount === 0) {
            throw new Error(`[AssignmentDAO] No assignment found with ID ${assignmentId}`);
        }
        return result;
    } catch (error) {
        console.error("[AssignmentDAO] Error deleting assignment:", error);
        throw error;
    }
};
