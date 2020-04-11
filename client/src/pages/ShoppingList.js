import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import Divider from '@material-ui/core/Divider'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { Typography } from '@material-ui/core'
import useStyles from '../classes'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

export default function CheckboxesGroup() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    milk: false,
    bread: false,
    paper: false,
  })

  const [productsStock, setProductsStock] = React.useState({
  })

  const [showPoints, setShowPoints] = React.useState(false)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const setStockChanged = (product) => {
    setProductsStock({ ...productsStock, [product]: true })
  }

  let history = useHistory();

  return (
    <div className={[classes.verticalFlex, classes.p]}>
      <h2><Typography color="" variant="h5">Shopping List</Typography></h2>
      <form noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-04-11"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <Paper className={[classes.flexItemMain]}>
        <div>
          {['Eggs', 'Pasta', 'Toilet rolls'].map((product, goodNumber) => (
            <FormGroup className={classes.formGroup}>
              <div className={classes.flex}>
                <FormControlLabel
                  className={classes.flexItemMain}
                  control={<Checkbox color="primary" checked={state[product]} onChange={handleChange} name={product}/>}
                  label={product}
                />
                <TextField id={`${product}-qty`} value={`${goodNumber + 1}`} label="Qty" size="small"/>
              </div>
              <div>
                <Typography color="textSecondary" variant="caption">Indicate stock level for this item</Typography>
                <FormControl component="fieldset">
                  {/*<FormLabel component="legend">Indicate stock level for this item</FormLabel>*/}
                  <RadioGroup
                    row
                    aria-label="position"
                    name={`${product}-stock`}
                    onChange={() => {setStockChanged(product)}}
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary"/>}
                      label="0%"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="25"
                      control={<Radio color="primary"/>}
                      label="25%"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="50"
                      control={<Radio color="primary"/>}
                      label="50%"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="75"
                      control={<Radio color="primary"/>}
                      label=">75%"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <Divider/>
            </FormGroup>
          ))}
        </div>
      </Paper>

      <div className={classes.m}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setShowPoints(true)}
        >
          Done
        </Button>
      </div>

      {showPoints && (
        <Dialog open onClose={() => history.push("/shopaids/profile")}>
          <DialogContent style={{textAlign: 'center'}}>
            <Typography variant="subtitle1"><strong>Thanks for helping other shoppers! <br/> Have a safe trip home!</strong></Typography>
            <svg width="174" height="117" viewBox="0 0 174 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 58.5C150 63.3749 142.831 67.3898 141.684 71.9778C140.537 76.5662 144.551 83.7354 142.257 87.75C139.963 92.0515 131.647 91.7646 128.206 95.2058C124.765 98.647 125.051 106.676 120.75 109.257C116.735 111.551 109.566 107.537 104.978 108.684C100.39 109.831 96.3749 117 91.5 117C86.6251 117 82.6102 109.831 78.0221 108.684C73.4338 107.537 66.2646 111.551 62.25 109.257C57.9485 106.963 58.2354 98.647 54.7942 95.2058C51.353 91.7646 43.3235 92.0515 40.7426 87.75C38.4486 83.7354 42.4632 76.5662 41.3161 71.9778C40.1689 67.3895 33 63.3749 33 58.5C33 53.6251 40.1692 49.6102 41.3161 45.0221C42.463 40.4341 38.4486 33.2646 40.7426 29.25C43.0367 24.9485 51.353 25.2354 54.7942 21.7942C58.2354 18.353 57.9485 10.3235 62.25 7.74265C66.2646 5.44862 73.4338 9.46323 78.0221 8.31609C82.6102 7.16921 86.6251 0 91.5 0C96.3749 0 100.39 7.16921 104.978 8.31609C109.566 9.46323 116.735 5.44862 120.75 7.74265C125.051 10.0367 124.765 18.353 128.206 21.7942C131.647 25.2354 139.676 24.9485 142.257 29.25C144.551 33.2646 140.537 40.4338 141.684 45.0221C142.831 49.6105 150 53.6251 150 58.5Z" fill="#F2C651"/>
              <path d="M92 102C68.2446 102 49 82.7551 49 59C49 35.2449 68.2446 16 92 16C115.755 16 135 35.2446 135 59C135 82.7554 115.755 102 92 102ZM92 25.021C73.3567 25.021 58.021 40.3567 58.021 59C58.021 77.6433 73.3567 92.979 92 92.979C110.643 92.979 125.979 77.6433 125.979 59C125.979 40.3567 110.643 25.021 92 25.021Z" fill="#48A362"/>
              <path opacity="0.1" d="M92 101.96C68.8462 101.96 49.9021 83.1083 49 60C49 60.608 49 60.9122 49 61.5202C49 85.5406 68.2449 105 92 105C115.755 105 135 85.5404 135 61.5202C135 60.9122 135 60.608 135 60C134.098 83.4124 115.154 101.96 92 101.96Z" fill="#231F20"/>
              <path d="M81.1313 59H86.9282V39.2715H81.1313L76.1821 42.5801V47.4336L81.022 44.2344H81.1313V59ZM99.1499 59.5469C104.482 59.5469 107.832 55.582 107.832 49.0742C107.832 42.5117 104.441 38.7109 99.1499 38.7109C93.8589 38.7109 90.4546 42.5254 90.4546 49.0879C90.4546 55.6094 93.8179 59.5469 99.1499 59.5469ZM99.1499 55.0898C97.5366 55.0898 96.3609 53.1484 96.3609 49.0879C96.3609 45.0137 97.5366 43.168 99.1499 43.168C100.763 43.168 101.925 45.0137 101.925 49.0879C101.925 53.1484 100.763 55.0898 99.1499 55.0898Z" fill="#48A362"/>
              <path d="M84.9052 67.1562C83.5078 67.1562 82.4795 67.8594 82.0136 69.0459H81.9521V67.2969H78.3398V80.1025H81.9433V75.3213H82.0136C82.4619 76.4551 83.5166 77.1406 84.9492 77.1406C87.3574 77.1406 88.7021 75.3477 88.7021 72.1484C88.7021 68.9404 87.3486 67.1562 84.9052 67.1562ZM83.4726 74.3633C82.5234 74.3633 81.9345 73.5195 81.9257 72.1572C81.9345 70.8037 82.5322 69.9336 83.4726 69.9336C84.413 69.9336 85.0107 70.8037 85.0107 72.1484C85.0107 73.502 84.4218 74.3633 83.4726 74.3633ZM90.5234 65.1699V67.2969H89.2402V69.9072H90.5234V74.293C90.5234 76.209 91.6045 77 94.3467 77C95.0322 77 95.4893 76.9385 95.832 76.8682V74.3721C95.6211 74.4072 95.4893 74.416 95.2168 74.416C94.4785 74.416 94.127 74.0996 94.127 73.4932V69.9072H95.832V67.2969H94.127V65.1699H90.5234ZM96.6866 70.3115C96.6866 71.8496 97.7325 72.8867 99.6924 73.2734L101.564 73.6426C102.224 73.7656 102.479 73.9414 102.479 74.249C102.479 74.6533 102.057 74.8906 101.354 74.8906C100.545 74.8906 100.018 74.4951 99.9473 73.8535H96.4668C96.5899 75.9189 98.2774 77.2461 101.31 77.2461C104.148 77.2461 106.047 75.9277 106.047 73.8184C106.047 72.3418 105.186 71.5156 103.261 71.1377L101.072 70.707C100.448 70.5928 100.132 70.373 100.132 70.0742C100.132 69.6699 100.554 69.4062 101.204 69.4062C101.986 69.4062 102.487 69.8018 102.487 70.4346H105.757C105.757 68.3164 104.061 67.0508 101.231 67.0508C98.4004 67.0508 96.6866 68.29 96.6866 70.3115Z" fill="#48A362"/>
              <path d="M23.0489 4.92705C23.3483 4.00574 24.6517 4.00574 24.9511 4.92705L25.3471 6.1459C25.481 6.55792 25.8649 6.83688 26.2981 6.83688H27.5797C28.5484 6.83688 28.9512 8.0765 28.1675 8.6459L27.1307 9.39919C26.7802 9.65383 26.6335 10.1052 26.7674 10.5172L27.1634 11.7361C27.4628 12.6574 26.4083 13.4235 25.6246 12.8541L24.5878 12.1008C24.2373 11.8462 23.7627 11.8462 23.4122 12.1008L22.3754 12.8541C21.5917 13.4235 20.5372 12.6574 20.8366 11.7361L21.2326 10.5172C21.3665 10.1052 21.2198 9.65383 20.8693 9.39919L19.8325 8.6459C19.0488 8.0765 19.4516 6.83688 20.4203 6.83688H21.7019C22.1351 6.83688 22.519 6.55792 22.6529 6.1459L23.0489 4.92705Z" fill="#E25F3E"/>
              <path d="M27.5489 93.9271C27.8483 93.0057 29.1517 93.0057 29.4511 93.9271L29.7348 94.8004C29.8687 95.2124 30.2527 95.4914 30.6859 95.4914H31.6042C32.5729 95.4914 32.9757 96.731 32.192 97.3004L31.449 97.8402C31.0986 98.0948 30.9519 98.5462 31.0858 98.9582L31.3695 99.8316C31.6689 100.753 30.6144 101.519 29.8307 100.95L29.0878 100.41C28.7373 100.155 28.2627 100.155 27.9122 100.41L27.1693 100.95C26.3856 101.519 25.3311 100.753 25.6305 99.8316L25.9142 98.9582C26.0481 98.5462 25.9014 98.0948 25.551 97.8402L24.808 97.3004C24.0243 96.731 24.4271 95.4914 25.3958 95.4914H26.3141C26.7473 95.4914 27.1313 95.2124 27.2652 94.8004L27.5489 93.9271Z" fill="#E25F3E"/>
              <path d="M168.049 76.927C168.348 76.0057 169.652 76.0057 169.951 76.927L170.347 78.1459C170.481 78.5579 170.865 78.8369 171.298 78.8369H172.58C173.548 78.8369 173.951 80.0765 173.167 80.6459L172.131 81.3992C171.78 81.6538 171.634 82.1052 171.767 82.5172L172.163 83.7361C172.463 84.6574 171.408 85.4235 170.625 84.8541L169.588 84.1008C169.237 83.8462 168.763 83.8462 168.412 84.1008L167.375 84.8541C166.592 85.4235 165.537 84.6574 165.837 83.7361L166.233 82.5172C166.366 82.1052 166.22 81.6538 165.869 81.3992L164.833 80.6459C164.049 80.0765 164.452 78.8369 165.42 78.8369H166.702C167.135 78.8369 167.519 78.5579 167.653 78.1459L168.049 76.927Z" fill="#E25F3E"/>
              <path d="M7.04894 33.927C7.3483 33.0057 8.6517 33.0057 8.95106 33.9271L10.0206 37.2188C10.1545 37.6309 10.5385 37.9098 10.9717 37.9098H14.4329C15.4016 37.9098 15.8044 39.1494 15.0207 39.7188L12.2205 41.7533C11.87 42.0079 11.7234 42.4593 11.8572 42.8713L12.9268 46.1631C13.2261 47.0844 12.1717 47.8506 11.388 47.2812L8.58778 45.2467C8.2373 44.9921 7.7627 44.9921 7.41221 45.2467L4.61204 47.2812C3.82833 47.8506 2.77385 47.0844 3.0732 46.1631L4.14277 42.8713C4.27665 42.4593 4.12999 42.0079 3.7795 41.7533L0.979333 39.7188C0.195619 39.1494 0.598395 37.9098 1.56712 37.9098H5.02832C5.46154 37.9098 5.8455 37.6309 5.97937 37.2188L7.04894 33.927Z" fill="#E25F3E"/>
              <path d="M163.049 11.927C163.348 11.0057 164.652 11.0057 164.951 11.9271L166.021 15.2188C166.155 15.6309 166.538 15.9098 166.972 15.9098H170.433C171.402 15.9098 171.804 17.1494 171.021 17.7188L168.22 19.7533C167.87 20.0079 167.723 20.4593 167.857 20.8713L168.927 24.1631C169.226 25.0844 168.172 25.8506 167.388 25.2812L164.588 23.2467C164.237 22.9921 163.763 22.9921 163.412 23.2467L160.612 25.2812C159.828 25.8506 158.774 25.0844 159.073 24.1631L160.143 20.8713C160.277 20.4593 160.13 20.0079 159.78 19.7533L156.979 17.7188C156.196 17.1494 156.598 15.9098 157.567 15.9098H161.028C161.462 15.9098 161.845 15.6309 161.979 15.2188L163.049 11.927Z" fill="#E25F3E"/>
            </svg>
            <Button color="primary" variant="contained" onClick={() => history.push("/shopaids/profile")} fullWidth>See total points earned</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
