import React, { useContext, useState } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core'
import useStyles from '../classes'

import Context from "../context";

export default function Home() {
  const classes = useStyles()
  const products = useContext(Context)
  const [newProduct, updateNewProduct] = useState({name:"", qty: 1})

  // function updateQty(val) {
  //   updateNewProduct({name, qty: val})
  // }
  function addProduct() {
    // const prod = {name: newProduct, qty: 1}
    updateNewProduct({name:"", qty: 1})
    products.push(newProduct)
    // updateProducts(updateProducts)
  }
  return (
    <div className={ classes.verticalFlex}>
      <h2><Typography color="" variant="h5">What items do you want to buy?</Typography></h2>
      <Paper className={[classes.flexItemMain]}>
        <div>
          {products.map((product, index) => (
            <FormGroup className={classes.formGroup}>
              <div className={classes.flex}>
                <TextField
                  label="Product"
                  defaultValue={product.name}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                &nbsp;
                <TextField id={index} label="Qty" value={product.qty}/>
              </div>
            </FormGroup>
          ))}
          <form style={{minWidth: "20em"}} noValidate autoComplete="off">
            <TextField
              id="addProduct"
              label="Type items like Milk"
              onChange={event => updateNewProduct({...newProduct, name: event.target.value })}
              value={newProduct.name}
            />
            &nbsp;
            <TextField
              label="Qty"
              onChange={event => updateNewProduct({...newProduct, qty: event.target.value})}
              value={newProduct.qty}
            />
            <IconButton onClick={addProduct}>
              <AddIcon/>
            </IconButton>
          </form>
        </div>
      </Paper>

      <div className={classes.m}>
        <Button variant="contained" color="primary" component={Link} to="/shopaid/stores" fullWidth>
          Continue
        </Button>
      </div>
    </div>
  )
}
