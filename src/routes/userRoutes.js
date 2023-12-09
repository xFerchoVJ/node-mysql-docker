import { Router } from "express";
import User from "../config/db.js";
const router = new Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json({ msg: "Usuario creado exitosamente.", user });
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ msg: "No se encontró el usuario." });
  }
  res.status(200).json(user);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.update(req.body, {
    where: { id },
  });
  res
    .status(200)
    .json({ msg: "Usuario actualizado exitosamente.", updatedUser });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.status(200).json({ msg: "Usuario eliminado exitosamente." });
});

export default router;
