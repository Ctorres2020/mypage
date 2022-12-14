const Menu = require('../models/menu')

function addMenu(req, res) {
    const {title, url, order, active} = req.body;
    const menu = new Menu();

    menu.title = title;
    menu.url = url;
    menu.order = order;
    menu.active = active;

    menu.save((err, createMenu) => {
        if (err) {
            res.status(500).send({message: "Error del servidor"})
        } else {
            if (!createMenu) {
                res.status(404).send({message: "Error al crear el menu"})
            } else {
                res.status(200).send({message: "Menu creado correctamente"})
            }
        }
    })
}

function getMenus(req, res) {
    Menu.find()
        .sort({order: "asc"})
        .exec((err, menusStored) => {
            if (err) {
                res.status(500).send({message: "Error del servidor"})
            } else {
                if (!menusStored) {
                    res.status(404).send({message: "No se a encontrado ningun menu"})
                } else {
                    res.status(200).send({menu: menusStored})
                }
            }
        })
}

function updateMenu(req, res) {
    let menuData = req.body;
    const params = req.params;

    Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdate) => {
        if (err) {
            res.status(500).send({message: "Error del servidor"})
        } else {
            if (!menuUpdate) {
                res.status(404).send({message: "No se encontro ningun menu"})
            } else {
                res.status(200).send({message: "Menu actualizado correctamente"})
            }
        }
    })
}

function activateMenu(req, res) {
    const {id } = req.params;
    const {active} = req.body;

    Menu.findByIdAndUpdate(id, {active}, (err, menuStored) =>{
        if (err) {
            res.status(500).send({ message: "Error del servidor" })
        } else {
            if (!menuStored) {
                res.status(404).send({ message: "No se encontro el menu" })
            } else {
                if (active === true) {
                    res.status(200).send({ message: "Menu activado correctamente "})
                } else {
                    res.status(200).send({ message: "Menu desactivado correctamente "})
                }
            }
        }
    })
}

function deleteMenu(req, res) {
    const {id} = req.params;

    Menu.findByIdAndRemove(id, (err, menuDelete) => {
        if (err) {
            res.status(500).send({message: "Error del servidor"})
        } else {
            if (!menuDelete) {
                res.status(404).send({message: "El menu no se encontro"})
            } else {
                res.status(200).send({message: "El menu a sido eliminado correctamente"})
            }
        }
    })
}

module.exports = {
    addMenu,
    getMenus,
    updateMenu,
    activateMenu,
    deleteMenu
}