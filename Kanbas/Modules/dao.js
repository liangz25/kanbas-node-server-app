// import Database from "../Database/index.js";
import model from "./model.js";
export function createModule(module) {
    delete module._id
 return model.create(module);
}

export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
    // const { modules } = Database;
    // return modules.filter((module) => module.course === courseId);
}
export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });

}
export function updateModule(moduleId, moduleUpdates) {
    return model.updateOne({ _id: moduleId }, moduleUpdates);
    // const { modules } = Database;
    // const module = modules.find((module) => module._id === moduleId);
    // Object.assign(module, moduleUpdates);
    // return module;
}


