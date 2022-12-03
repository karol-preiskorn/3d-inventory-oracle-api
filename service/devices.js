/*
* File:        /service/devices.js
* Description: execute SQLs on database
* Used by:
* Dependency:
*
* HISTORY:
* Date        By     Comments
* ----------  -----  ---------------------------------------------------------
* 2022-12-03	C2RLO	 Add categories and types
* 2022-12-01	C2RLO	 FIX: POST debug
* 2022-11-27  C2RLO  initialize
*/

const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')
var Chance = require('chance')
var DeviceTypes = [
  "Bridge",
  "CoolAir",
  "Copier",
  "Desktop",
  "Firewall",
  "Getaway",
  "Hubs",
  "Load Balancer",
  "Modem",
  "Multiplexer",
  "PDU System",
  "Power",
  "Printer",
  "Probe",
  "Repeaters",
  "Router",
  "Security Device",
  "Server",
  "Switch",
  "Telephone",
  "Terminal",
  "Traffic shaper",
  "Transceiver",
  "UPS System",
  "Workstations"
]

var DeviceCategory = [
  {
    "Category": "Connectivity",
    "Description": "Data centers often have multiple fiber connections to the internet provided by multiple carriers."
  },
  {
    "Category": "Facility",
    "Description": "Data center buildings may be specifically designed as a data center. For example, the height of ceilings will match requirements for racks and overhead systems. In some cases, a data center occupies a floor of an existing building."
  },
  {
    "Category": "Site",
    "Description": "A data center requires a site with connections to grids, networks and physical <a href=\"https://simplicable.com/new/infrastructure\">infrastructure</a>  such as roads. Proximity to markets, customers, employees and services also play a role in selecting an appropriate site. Locating data centers in cold climates can reduce cooling costs."
  },
]


const { BIND_OUT, BIND_IN, DB_TYPE_VARCHAR } = require("oracledb")

simpleExecute = require("./database.js")

const baseQuery = `select device_id, device_name, device_category, device_type from devices`

exports.attributes_typesGET = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

exports.find = function (context) {
  return new Promise(async function (resolve, reject) {
    console.log("context: ", context)

    let query = baseQuery
    const binds = {}

    if (context.id) {
      binds.device_id = context.id
      query += " where device_id = :device_id"
    }

    const result = await simpleExecute.simpleExecute(query, binds)

    resolve(result.rows)
  })
}

const createSql = `insert into devices (device_id, device_name, device_category, device_type) values (:device_id, :device_name, :device_category, :device_type)`

exports.create = function (Device) {
  return new Promise(async function (resolve, reject) {
    // const device = Object.assign({}, Device)
    const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }) // big_red_donkey
    const shortName = uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
      length: 2
    }) // big-donkey

    // Instantiate Chance so it can be used
    var chance = new Chance()

    var randomDeviceTypes = DeviceTypes[Math.floor(Math.random() * DeviceTypes.length)]
    var randomDeviceCategory = DeviceCategory[Math.floor(Math.random() * DeviceCategory.length)]

    const device = {
      device_id: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: randomName
      },
      device_name: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: shortName
      },
      device_category: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: randomDeviceCategory.Category
      },
      device_type: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: randomDeviceTypes
      }
    }

    const result = await simpleExecute.simpleExecute(createSql, device)

    console.log("👀 device: ", device)
    console.log("👀 created rowid: ", result.lastRowid)
    console.log("👀 no created rows: ", result.rowsAffected)

    return device
  })
}

// module.exports.create = create;

// const updateSql = `update device
//   set device_name = :device_name,
//     device_category = :device_category,
//     device_type = :device_type,
//   where device_id = :device_id`;

// async function update(Device) {
//   const device = Object.assign({}, Device);
//   const result = await simpleExecute(updateSql, device);

//   if (result.rowsAffected && result.rowsAffected === 1) {
//     return device;
//   } else {
//     return null;
//   }
// }

// const _update = update;
// export { _update as update };

// const delete_device_sql = `begin
//     delete from devices where device_id = :device_id;
//     :rowcount := sql%rowcount;
//   end;`;

// async function remove(id) {
//   const binds = {
//     device_id: id,
//     rowcount: {
//       dir: BIND_OUT,
//       type: DB_TYPE_VARCHAR,
//     },
//   };
//   const result = await simpleExecute(delete_device_sql, binds);

//   return result.outBinds.rowcount === 1;
// }

// const _remove = remove;
// export { _remove as remove };
