export const createTask = async (taskData) => {
  try {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to create task",
      };
    }

    return data;
  } catch (error) {
    console.error("Create task error:", error);

    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
};

 //get all the projects
export const getAllTasks = async () => {
  try {
    const response = await fetch("/api/tasks");

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch tasks");
    }

    return data;
  } catch (error) {
    console.error("Get all tasks error:", error);

    return {
      success: false,
      message: error.message || "Failed to fetch tasks",
    };
  }
};