/*
 * File:        /service/devices.js
 * Description: execute SQLs on database
 * Used by:
 * Dependency:
 *
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
} = require('unique-names-generator')

var DeviceTypes = [
  'Bridge',
  'CoolAir',
  'Copier',
  'Desktop',
  'Firewall',
  'Getaway',
  'Hubs',
  'Load Balancer',
  'Modem',
  'Multiplexer',
  'PDU System',
  'Power',
  'Printer',
  'Probe',
  'Repeaters',
  'Router',
  'Security Device',
  'Server',
  'Switch',
  'Telephone',
  'Terminal',
  'Traffic shaper',
  'Transceiver',
  'UPS System',
  'Workstations',
]

var DeviceCategory = [
  {
    Category: 'Connectivity',
    Description:
      'Data centers often have multiple fiber connections to the internet provided by multiple carriers.',
  },
  {
    Category: 'Facility',
    Description:
      'Data center buildings may be specifically designed as a data center. For example, the height of ceilings will match requirements for racks and overhead systems. In some cases, a data center occupies a floor of an existing building.',
  },
  {
    Category: 'Site',
    Description:
      'A data center requires a site with connections to grids, networks and physical <a href="https://simplicable.com/new/infrastructure">infrastructure</a>  such as roads. Proximity to markets, customers, employees and services also play a role in selecting an appropriate site. Locating data centers in cold climates can reduce cooling costs.',
  },
]

const oracledb = require('oracledb')
const datatabase = require('./database.js')

const baseQuery = `SELECT device_id, device_name, device_category, device_type FROM devices`

exports.find = function (context) {
  return new Promise(function (resolve, reject) {
    let prompt = '[device.find]'
    //console.log("👀", prompt, " context.body: ", body)
    let query = baseQuery
    let binds = ''

    //let j_binds = JSON.parse('{"device_name": "device-A1"}')

    if (
      context.body.device_id ||
      context.body.device_name ||
      context.body.device_category ||
      context.body.device_type
    ) {
      query += ' WHERE'
    }
    if (context.body.device_id) {
      query += ' device_id = :device_id'
      binds = {
        device_id: {
          dir: oracledb.BIND_IN,
          type: oracledb.DB_TYPE_VARCHAR,
          val: context.body.device_id,
        },
      }
    }
    // if (context.body.device_name) {
    //   query += " device_id = :device_name";
    // binds += {
    //   device_name: {
    //   dir: oracledb.BIND_IN,
    // type: oracledb.DB_TYPE_VARCHAR,
    // val: context.body.device_name,
    //       },
    //     };
    //   }
    // if (context.body.device_category) {
    //   query += " device_id = :device_category";
    // binds += {
    //   device_category: {
    //   dir: oracledb.BIND_IN,
    // type: oracledb.DB_TYPE_VARCHAR,
    // val: context.body.device_category,
    //       },
    //     };
    //   }
    // if (context.body.device_type) {
    //   query += " device_id = :device_type";
    // binds += {
    //   device_type: {
    //   dir: oracledb.BIND_IN,
    // type: oracledb.DB_TYPE_VARCHAR,
    // val: context.body.device_type,
    //       },
    //     };
    //   }
    // j_binds = JSON.stringify(j_binds);
    //
    //console.log("👀", prompt, " device.get.query: ", query)
    //console.log("👀", prompt, " device.get.binds: ", binds)
    try {
      const result = datatabase.sqlExecute(query, binds)
      resolve(result)
    } catch (err) {
      console.log('🐛', prompt, ' Error in simpleExecute:', err)
      reject(err)
    }
  })
}

//
// ****************** POST *************************
//
const createSql = `insert into devices (device_id, device_name, device_category, device_type) values (:device_id, :device_name, :device_category, :device_type)`

exports.create = async function (Device) {
  return new Promise(async function (resolve, _reject) {
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

        const device = {
          device_id: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: randomName,
          },
          device_name: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: shortName,
          },
          device_category: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: randomDeviceCategory.Category,
          },
          device_type: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: randomDeviceTypes,
          },
        }
      } else {
        const device = {
          device_id: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: deviceContext.device_id,
          },
          device_name: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: deviceContext.device_name,
          },
          device_category: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: deviceContext.device_category,
          },
          device_type: {
            dir: oracledb.BIND_IN,
            type: oracledb.DB_TYPE_VARCHAR,
            val: deviceContext.device_type,
          },
        }
        deviceContext = device
        console.log('👀 device.create.query: ', createSql)
        console.log('👀 device.create.binds: ', deviceContext)

        const result = await datatabase.sqlExecute(createSql, deviceContext)

        console.log('👀 device.create.result.errNum: ', result.errNum)
        console.log('👀 device.create.result.message:', result.message)
        if (result.errNum === '0') {
          console.log('👀 device.create.result.error:', result.message)
        } else {
          console.log('👀 device.create.result.rows:', result.rows)
        }
        resolve(result)
      }
    } catch (err) {
      console.log('🐛 Reject(Error) in sqlExecute:', err)
      resolve(err)
    }
  })
}

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
