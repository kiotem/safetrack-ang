export default class MenuItems {
  static items = [
     {
        "id": 'dashboard',
        "name": "Dashboard",
        "icon": "fa-solid fa-grid-horizontal",
        "url": "dashboard.php",
        "is_action": true,
        "subitems":[]
    },
    {
        "id": 'alerts_list',
        "name": "Alertas",
        "icon": "fa-regular fa-circle-exclamation",
        "url": "vehicles_add.php",
        "is_action": true,
        "subitems":[]
    },
    {
        "id": 'vehicles_list',
        "name": "Vehículos",
        "icon": "fa-regular fa-car-side",
        "url": "vehicles.php",
        "is_action": true,
        "subitems":[
            /*
            {
                "id": 'vehicles_list',
                "name": "Listar",
                "icon": "fa-solid fa-clipboard-list",
                "url": "vehicles.php",
                "is_action": true,
                "subitems":[]
            },
            {
                "id": 'vehicles_add',
                "name": "Crear",
                "icon": "fa-solid fa-plus",
                "url": "vehicles_add.php",
                "is_action": true,
                "subitems":[]
            }*/
        ]
    },
    {
        "id": 'drivers_list',
        "name": "Conductores",
        "icon": "fa-regular fa-users",
        "url": "users.php",
        "is_action": true,
        "subitems":[
            /*
            {
                "id": 'drivers_list',
                "name": "Listar",
                "icon": "fa-solid fa-address-book",
                "url": "vehicles.php",
                "is_action": true,
                "subitems":[]
            },
            {
                "id": 'drivers_add',
                "name": "Crear",
                "icon": "fa-solid fa-plus",
                "url": "vehicles_add.php",
                "is_action": true,
                "subitems":[]
            }*/
        ]
    },   
    {
        "id": 'devices_list',
        "name": "Dispositivos",
        "icon": "fa-solid fa-mobile-signal-out",
        "url": "vehicles_add.php",
        "is_action": true,
        "subitems":[]
    }, 
    {
        "id": 'reports',
        "name": "Reportes",
        "icon": "fa-regular fa-file-spreadsheet",
        "url": "users.php",
        "is_action": true,
        "subitems":[
            {
                "id": 'history',
                "name": "Histórico",
                "icon": "fa-regular fa-route",
                "url": "vehicles.php",
                "is_action": true,
                "subitems":[]
            },
            {
                "id": 'vehicle_status',
                "name": "Estado",
                "icon": "fa-regular fa-car",
                "url": "vehicles_add.php",
                "is_action": true,
                "subitems":[]
            },
            {
                "id": 'maintenances_list',
                "name": "Mantenimientos",
                "icon": "fa-regular fa-screwdriver-wrench",
                "url": "vehicles_add.php",
                "is_action": true,
                "subitems":[]
            }
            /*,
            {
                "id": 'combustible',
                "name": "Combustible",
                "icon": "fa-solid fa-gas-pump",
                "url": "vehicles_add.php",
                "is_action": true,
                "subitems":[]
            }*/
        ]
    },
    {
        "id": 'settings',
        "name": "Ajustes",
        "icon": "fa-regular fa-gears",
        "url": "settings.php",
        "is_action": true,
        "subitems":[
            {
                "id": 'devices',
                "name": "Dispositivos",
                "icon": "fa-solid fa-mobile-signal-out",
                "url": "devices.php",
                "is_action": true,
                "subitems":
                [
                    {
                        "id": 'devices_list',
                        "name": "Listar",
                        "icon": "fa-regular fa-server",
                        "url": "devices.php",
                        "is_action": true,
                        "subitems":[]
                    },
                    {
                        "id": 'devices_add',
                        "name": "Crear",
                        "icon": "fa-regular fa-plus",
                        "url": "devices_add.php",
                        "is_action": true,
                        "subitems":[]
                    }
                ]
            },
            {
                "id": 'settings_users',
                "name": "Usuarios",
                "icon": "fa-regular fa-clipboard-user",
                "url": "settings.php",
                "is_action": true,
                "subitems":[
                    {
                        "id": 'users_list',
                        "name": "Listar",
                        "icon": "fa-regular fa-address-card",
                        "url": "devices.php",
                        "is_action": true,
                        "subitems":[]
                    },
                    {
                        "id": 'users_add',
                        "name": "Crear",
                        "icon": "fa-regular fa-plus",
                        "url": "devices_add.php",
                        "is_action": true,
                        "subitems":[]
                    }
                ]
            },
            {
                "id": 'operations',
                "name": "Operaciones",
                "icon": "fa-regular fa-building",
                "url": "settings.php",
                "is_action": true,
                "subitems":[
                    {
                        "id": 'operation_list',
                        "name": "Listar",
                        "icon": "fa-regular fa-city",
                        "url": "devices.php",
                        "is_action": true,
                        "subitems":[]
                    },
                    {
                        "id": 'operation_add',
                        "name": "Crear",
                        "icon": "fa-regular fa-plus",
                        "url": "devices_add.php",
                        "is_action": true,
                        "subitems":[]
                    }
                ]
            },
            {
                "id": 'logout',
                "name": "Cerrar sesión",
                "icon": "fa-regular fa-arrow-right-from-bracket",
                "url": "vehicles_add.php",
                "is_action": true,
                "subitems":[]
            }
        ]
    }
  ];
}