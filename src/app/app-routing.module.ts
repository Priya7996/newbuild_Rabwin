import { NgModule } from '@angular/core';
   import { Routes, RouterModule } from '@angular/router';
   import { AuthGuard} from '../app/Service/core/authentication/auth.guard';
    
   
    const routes: Routes = [
    { 
      path: '', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule) 
    },
    {
       path: 'register', loadChildren: () => import('./Components/register/register.module').then(m => m.RegisterModule)
    },
    { 
      path: 'sidebar', loadChildren: () => import('./Nav/sidebar/sidebar.module').then(m => m.SidebarModule) 
    },
    { 
      path: 'alarm', loadChildren: () => import('./Components/alarm/alarm.module').then(m => m.AlarmModule) 
    },
    
    { 
      path: 'dashboard', loadChildren: () => import('./Components/dashboard/dashboard.module').then(m => m.DashboardModule), 
    },
    
    { 
      path: 'report', loadChildren: () => import('./Components/report/report.module').then(m => m.ReportModule) 
    },
  
    {
       path: 'machine_registration', loadChildren: () => import('./Components/machine-registration/machine-registration.module').then(m => m.MachineRegistrationModule) 
    },
    { path: 'user_management', loadChildren: () => import('./Components/user-management/user-management.module').then(m => m.UserManagementModule) 
    },
    { 
      path: 'operator_registration', loadChildren: () => import('./Components/operator-registration/operator-registration.module').then(m => m.OperatorRegistrationModule) 
    },
    { 
      path: 'shift', loadChildren: () => import('./Components/shift/shift.module').then(m => m.ShiftModule) 
    },
      
    {
       path: 'trendchart', loadChildren: () => import('./Components/trendchart/trendchart.module').then(m => m.TrendchartModule) 
      },
       { 
         path: 'comparechart', loadChildren: () => import('./Components/comparechart/comparechart.module').then(m => m.ComparechartModule) 
        },
       { 
         path: 'overallchart', loadChildren: () => import('./Components/overallchart/overallchart.module').then(m => m.OverallchartModule) 
        },
      {
         path: 'Tablet', loadChildren: () => import('./Components/machine-lmw/machine-lmw.module').then(m => m.MachineLmwModule) 
        },
      {
         path: 'reason_lmw', loadChildren: () => import('./Components/reason-lmw/reason-lmw.module').then(m => m.ReasonLmwModule) 
        },
      { 
        path: 'oee_dashboard', loadChildren: () => import('./Components/oee-dashboard/oee-dashboard.module').then(m => m.OeeDashboardModule) 
      },
     { 
       path: 'reflect', loadChildren: () => import('./Components/reflect/reflect.module').then(m => m.ReflectModule) 
      },
    { 
      path: 'idle_reason', loadChildren: () => import('./Components/idle-reason/idle-reason.module').then(m => m.IdleReasonModule) 
    },
     {
        path: 'production', loadChildren: () => import('./Components/production/production.module').then(m => m.ProductionModule) 
      },
      { 
        path: 'report_idle', loadChildren: () => import('./Components/report-idle/report-idle.module').then(m => m.ReportIdleModule) 
      },
    { path: 'oee', loadChildren: () => import('./Components/oee/oee.module').then(m => m.OeeModule) },
    { path: 'chart', loadChildren: () => import('./Components/chart/chart.module').then(m => m.ChartModule) },
    { path: 'kpi_dashboard', loadChildren: () => import('./Components/kpi-dashboard/kpi-dashboard.module').then(m => m.KpiDashboardModule) },
    { path: 'operator_view', loadChildren: () => import('./Components/operator-view/operator-view.module').then(m => m.OperatorViewModule) },
    { path: 'machine_details', loadChildren: () => import('./Components/machine-details/machine-details.module').then(m => m.MachineDetailsModule) },
    { path: 'trend_analysis', loadChildren: () => import('./Components/trend-analysis/trend-analysis.module').then(m => m.TrendAnalysisModule) },
    { path: 'shopfloor_cockpit', loadChildren: () => import('./Components/shopfloor-cockpit/shopfloor-cockpit.module').then(m => m.ShopfloorCockpitModule) },
    { path: 'acquistion_repot', loadChildren: () => import('./Components/aquistion-report/aquistion-report.module').then(m => m.AquistionReportModule) },
    { path: 'new_machine_list', loadChildren: () => import('./Components/new-machine-list/new-machine-list.module').then(m => m.NewMachineListModule) },
    { path: 'production_idle_reason', loadChildren: () => import('./Components/production-idle-reason/production-idle-reason.module').then(m => m.ProductionIdleReasonModule) },
    { path: 'production_operation_quality', loadChildren: () => import('./Components/production-operation-quality/production-operation-quality.module').then(m => m.ProductionOperationQualityModule) },
    { path: 'production_operation_start', loadChildren: () => import('./Components/production-operation-start/production-operation-start.module').then(m => m.ProductionOperationStartModule) },
    { path: 'production_operation_idle', loadChildren: () => import('./Components/production-operation-idle/production-operation-idle.module').then(m => m.ProductionOperationIdleModule) },
    { path: 'production_operation', loadChildren: () => import('./Components/production-operation/production-operation.module').then(m => m.ProductionOperationModule) },
    { path: 'production_development', loadChildren: () => import('./Components/production-development/production-development.module').then(m => m.ProductionDevelopmentModule) },
    { path: 'presentive_productive', loadChildren: () => import('./Components/presentive-productive/presentive-productive.module').then(m => m.PresentiveProductiveModule) },
    { path: 'preventive_main_time', loadChildren: () => import('./Components/preventive-main-time/preventive-main-time.module').then(m => m.PreventiveMainTimeModule) },
    { path: 'preventive_maintenance', loadChildren: () => import('./Components/preventive-maintenance/preventive-maintenance.module').then(m => m.PreventiveMaintenanceModule) },
    { path: 'new_operator', loadChildren: () => import('./Components/new-operator/new-operator.module').then(m => m.NewOperatorModule) },
    { path: 'employee_login', loadChildren: () => import('./Components/employee-login/employee-login.module').then(m => m.EmployeeLoginModule) },
    { path: 'employee_dashboard', loadChildren: () => import('./Components/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule) },
    { path: 'andon-dashboard', loadChildren: () => import('./Components/andon-dashboard/andon-dashboard.module').then(m => m.AndonDashboardModule) },
    { path: 'sdashboard', loadChildren: () => import('./Components/sdashboard/sdashboard.module').then(m => m.SdashboardModule) },
    { path: 'quality', loadChildren: () => import('./Components/quality/quality.module').then(m => m.QualityModule) },
    { path: 'dashboardline', loadChildren: () => import('./Components/dashboardline/dashboardline.module').then(m => m.DashboardlineModule) },
    { path: 'component', loadChildren: () => import('./Components/component/component.module').then(m => m.ComponentModule) },
    { path: 'widget', loadChildren: () => import('./Components/widget/widget.module').then(m => m.WidgetModule) },
    ]
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
    })
    export class AppRoutingModule { }