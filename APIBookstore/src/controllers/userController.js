import db from "../models/index.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: ["id", "name", "email"],
    });
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ error: "No se pudo obtener la lista de usuarios.", details: error.message });
  }
};


export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    await user.update({ name, email });

    return res.status(200).json({ success: true, message: "Usuario actualizado exitosamente." });
  } catch (error) {
    return res.status(500).json({ error: "No se pudo actualizar el usuario.", details: error.message });
  }
};


export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    await user.destroy();

    return res.status(200).json({ success: true, message: "Usuario eliminado exitosamente." });
  } catch (error) {
    return res.status(500).json({ error: "No se pudo eliminar el usuario.", details: error.message });
  }
};
