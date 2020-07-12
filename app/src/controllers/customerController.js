const controller = {}

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) { res.json(err) }
    conn.query('SELECT * FROM customer', (err, customers) => {
      if (err) {
        res.json(err)
      }
      res.render('customers', {
        data: customers
      })
    })
  })
}

controller.save = (req, res) => {
  const data = req.body
  console.log(req.body)
  req.getConnection((err, connection) => {
    if (err) { res.json(err) }
    connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      if (err) { res.json(err) }
      console.log(customer)
      res.redirect('/')
    })
  })
}

controller.edit = (req, res) => {
  const { id } = req.params
  req.getConnection((err, conn) => {
    if (err) { res.json(err) }
    conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, rows) => {
      if (err) { res.json(err) }

      res.render('customers_edit', {
        data: rows[0]
      })
    })
  })
}

controller.update = (req, res) => {
  const { id } = req.params
  const newCustomer = req.body
  req.getConnection((err, conn) => {
    if (err) { res.json(err) }

    conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
      if (err) { res.json(err) }

      res.redirect('/')
    })
  })
}

controller.delete = (req, res) => {
  const { id } = req.params
  req.getConnection((err, connection) => {
    if (err) { res.json(err) }
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, _rows) => {
      if (err) { res.json(err) }

      res.redirect('/')
    })
  })
}

module.exports = controller
