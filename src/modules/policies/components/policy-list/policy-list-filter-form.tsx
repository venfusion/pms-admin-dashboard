import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  addresses,
  properties,
  units,
  users,
} from '#/modules/policies/components/policy-list/mock.data';
import {
  PolicyListFilterFormSchema,
  policyListFilterFormSchema,
} from '#/modules/policies/schemas/policy-list-filter-form.schema';
import { policyListFilterFormStyles } from '#/modules/policies/styles/policy-list-filter-form.style';
import { PolicyPaymentType, PolicyStatus } from '#/modules/policies/types/policy.type';

type PolicyListFilterFormProps = {
  handleClose: () => void;
};

export function PolicyListFilterForm({ handleClose }: PolicyListFilterFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<PolicyListFilterFormSchema>({
    resolver: zodResolver(policyListFilterFormSchema),
    defaultValues: {
      effectiveStartDate: null,
      effectiveEndDate: null,
      expiryStartDate: null,
      expiryEndDate: null,
      status: [],
    },
  });

  const onSubmit: SubmitHandler<PolicyListFilterFormSchema> = (data) => {
    console.log(data);
    reset();
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={policyListFilterFormStyles.form}>
      <DialogContent sx={policyListFilterFormStyles.content}>
        <Controller
          name='userId'
          control={control}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              options={users}
              getOptionLabel={(option) => option.email}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={users.find((opt) => opt.id === field.value) || null}
              onChange={(_, value) => field.onChange(value?.id || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='User'
                  error={!!errors.userId}
                  helperText={errors.userId?.message}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      marginLeft: 0,
                    },
                  }}
                />
              )}
            />
          )}
        />
        <Controller
          name='propertyId'
          control={control}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              options={properties}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={properties.find((opt) => opt.id === field.value) || null}
              onChange={(_, value) => field.onChange(value?.id || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Property'
                  error={!!errors.propertyId}
                  helperText={errors.propertyId?.message}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      marginLeft: 0,
                    },
                  }}
                />
              )}
            />
          )}
        />
        <Controller
          name='addressId'
          control={control}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              options={addresses}
              getOptionLabel={(option) => `${option.street}, ${option.number}`}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={addresses.find((opt) => opt.id === field.value) || null}
              onChange={(_, value) => field.onChange(value?.id || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Address'
                  error={!!errors.addressId}
                  helperText={errors.addressId?.message}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      marginLeft: 0,
                    },
                  }}
                />
              )}
            />
          )}
        />
        <Controller
          name='unitId'
          control={control}
          render={({ field }) => (
            <Autocomplete
              disablePortal
              options={units}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={units.find((opt) => opt.id === field.value) || null}
              onChange={(_, value) => field.onChange(value?.id || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Unit'
                  error={!!errors.unitId}
                  helperText={errors.unitId?.message}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      marginLeft: 0,
                    },
                  }}
                />
              )}
            />
          )}
        />
        <Controller
          name='paymentType'
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.paymentType}>
              <InputLabel id='payment-type-label'>Payment Type</InputLabel>
              <Select
                {...field}
                label='Payment Type'
                labelId='payment-type-label'
                value={field.value ?? ''}
              >
                <MenuItem value={PolicyPaymentType.MONTHLY}>Monthly</MenuItem>
                <MenuItem value={PolicyPaymentType.YEARLY}>Yearly</MenuItem>
              </Select>
              {errors.paymentType && (
                <Typography color='error' variant='caption' sx={{ mt: 0.5 }}>
                  {errors.paymentType.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.status}>
              <InputLabel id='status-label'>Status</InputLabel>
              <Select
                {...field}
                multiple
                label='Status'
                labelId='status-label'
                value={field.value ?? ''}
              >
                <MenuItem value={PolicyStatus.DRAFT}>Draft</MenuItem>
                <MenuItem value={PolicyStatus.ACTIVE}>Active</MenuItem>
                <MenuItem value={PolicyStatus.CANCELLED}>Cancelled</MenuItem>
                <MenuItem value={PolicyStatus.TERMINATED}>Terminated</MenuItem>
                <MenuItem value={PolicyStatus.EXPIRED}>Expired</MenuItem>
              </Select>
              {errors.status && (
                <Typography color='error' variant='caption' sx={{ mt: 0.5 }}>
                  {errors.status[0]?.message}
                </Typography>
              )}
            </FormControl>
          )}
        />
        <FormGroup>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Loss of Use Coverage'
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Medical Payments Coverage'
                {...register('medicalPaymentsCoverage')}
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Scheduled Personal Property Coverage'
                {...register('scheduledPersonalPropertyCoverage')}
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Water Backup Coverage'
                {...register('waterBackupCoverage')}
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Earthquake Coverage'
                {...register('earthquakeCoverage')}
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Flood Coverage'
                {...register('floodCoverage')}
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Identity Theft Coverage'
                {...register('identityTheftCoverage')}
              ></FormControlLabel>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <FormControlLabel
                control={<Checkbox />}
                label='Pet Liability Coverage'
                {...register('petLiabilityCoverage')}
              ></FormControlLabel>
            </Grid>
          </Grid>
        </FormGroup>
        <Box width='100%' mb={1}>
          <Typography gutterBottom variant='subtitle2'>
            Effective Date Range
          </Typography>
          <Box sx={policyListFilterFormStyles.dateGroup}>
            <Controller
              name='effectiveStartDate'
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label={'Start Date'}
                  inputRef={field.ref}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      error: !!errors.effectiveStartDate,
                      helperText: errors.effectiveStartDate?.message,
                    },
                  }}
                />
              )}
            />
            <Controller
              name='effectiveEndDate'
              control={control}
              render={({ field }) => {
                const startDate = watch('effectiveStartDate');
                const expiryStartDate = watch('expiryStartDate');

                return (
                  <DatePicker
                    {...field}
                    label={'End Date'}
                    inputRef={field.ref}
                    onChange={field.onChange}
                    minDate={startDate?.add(1, 'day')}
                    maxDate={expiryStartDate}
                    slotProps={{
                      textField: {
                        error: !!errors.effectiveEndDate,
                        helperText: errors.effectiveEndDate?.message,
                      },
                    }}
                  />
                );
              }}
            />
          </Box>
        </Box>
        <Box width='100%'>
          <Typography gutterBottom variant='subtitle2'>
            Expiry Date Range
          </Typography>
          <Box sx={policyListFilterFormStyles.dateGroup}>
            <Controller
              name='expiryStartDate'
              control={control}
              render={({ field }) => {
                const effectiveEndDate = watch('effectiveEndDate');

                return (
                  <DatePicker
                    {...field}
                    label={'Start Date'}
                    inputRef={field.ref}
                    onChange={field.onChange}
                    minDate={effectiveEndDate}
                    slotProps={{
                      textField: {
                        error: !!errors.expiryStartDate,
                        helperText: errors.expiryStartDate?.message,
                      },
                    }}
                  />
                );
              }}
            />
            <Controller
              name='expiryEndDate'
              control={control}
              render={({ field }) => {
                const expiryStartDate = watch('expiryStartDate');

                return (
                  <DatePicker
                    {...field}
                    label={'End Date'}
                    inputRef={field.ref}
                    onChange={field.onChange}
                    minDate={expiryStartDate?.add(1, 'days')}
                    slotProps={{
                      textField: {
                        error: !!errors.expiryEndDate,
                        helperText: errors.expiryEndDate?.message,
                      },
                    }}
                  />
                );
              }}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type='submit'>Apply</Button>
      </DialogActions>
    </form>
  );
}
