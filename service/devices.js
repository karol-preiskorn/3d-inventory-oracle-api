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

const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator")
var Chance = require("chance")
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
  "Workstations",
]

var DeviceCategory = [
  {
    Category: "Connectivity",
    Description:
      "Data centers often have multiple fiber connections to the internet provided by multiple carriers.",
  },
  {
    Category: "Facility",
    Description:
      "Data center buildings may be specifically designed as a data center. For example, the height of ceilings will match requirements for racks and overhead systems. In some cases, a data center occupies a floor of an existing building.",
  },
  {
    Category: "Site",
    Description:
      'A data center requires a site with connections to grids, networks and physical <a href="https://simplicable.com/new/infrastructure">infrastructure</a>  such as roads. Proximity to markets, customers, employees and services also play a role in selecting an appropriate site. Locating data centers in cold climates can reduce cooling costs.',
  },
]

const { BIND_OUT, BIND_IN, DB_TYPE_VARCHAR } = require("oracledb")

const simpleExecute = require("./database.js")

const baseQuery = `select device_id, device_name, device_category, device_type from devices`

exports.attributes_typesGET = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

exports.find = function (context) {
  return new Promise(function (resolve, reject) {
    console.log("👀 device.get.context: ", context)
    console.log("👀 device.get.context.device_id: ", context.device_id)
    let query = baseQuery
    const binds = {
      device_id: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: context.device_id,
      },
      device_name: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: context.device_name,
      },
      device_category: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: context.device_category,
      },
      device_type: {
        dir: BIND_IN,
        type: DB_TYPE_VARCHAR,
        val: context.device_type,
      },
    }

    if (context.device_id) {
      binds.device_id = context.device_id
      query += " where device_id = :device_id"
    }

    console.log("👀 device.get.query: ", query)
    console.log("👀 device.get.binds: ", binds)

    try {
      const result = simpleExecute.simpleExecute(query, binds)
      resolve(result)
    } catch (err) {
      console.log("🐛 Error in simpleExecute:", err)
      reject(err)
    }
  })
}

//
// ****************** POST *************************
//
const createSql = `insert into devices (device_id, device_name, device_category, device_type) values (:device_id, :device_name, :device_category, :device_type)`

exports.create = async function (Device) {
  return new Promise(async function (resolve, reject) {
    try {
      let deviceContext = Object.assign({}, Device)
      if (Device.length == 0) {
        const randomName = uniqueNamesGenerator({
          dictionaries: [adjectives, colors, animals],
        }) // big_red_donkey
        const shortName = uniqueNamesGenerator({
          dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
          length: 2,
        }) // big-donkey
        var randomDeviceTypes =
          DeviceTypes[Math.floor(Math.random() * DeviceTypes.length)]
        var randomDeviceCategory =
          DeviceCategory[Math.floor(Math.random() * DeviceCategory.length)]

        // console.log("👀 device.post.context: ", deviceContext)

        const device = {
          device_id: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: randomName,
          },
          device_name: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: shortName,
          },
          device_category: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: randomDeviceCategory.Category,
          },
          device_type: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: randomDeviceTypes,
          },
        }
      } else {

        // TODO: attach values from body to binds
        //console.log("👀 device.post.context(values): ", deviceContext)

        const device = {
          device_id: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: deviceContext.device_id,
          },
          device_name: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: deviceContext.device_name,
          },
          device_category: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: deviceContext.device_category,
          },
          device_type: {
            dir: BIND_IN,
            type: DB_TYPE_VARCHAR,
            val: deviceContext.device_type,
          },
        }
        deviceContext = device
        const result = await simpleExecute.simpleExecute(createSql, deviceContext)
        resolve(result)
      }
    } catch (err) {
      console.log("🐛 Error in simpleExecute:", err)
      reject(err)
    }
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
