import React from 'react';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { Shield, User, Calendar, Mail } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { state } = useAuth();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Welcome Header */}
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                state.user?.isAdmin ? 'bg-amber-100' : 'bg-white bg-opacity-20'
              }`}>
                {state.user?.isAdmin ? (
                  <Shield className="h-8 w-8 text-amber-600" />
                ) : (
                  <User className="h-8 w-8 text-white" />
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Hello {state.user?.isAdmin ? 'Admin' : 'User'}!
                </h1>
                <p className="text-blue-100 text-lg">
                  Welcome back, {state.user?.name}
                </p>
              </div>
            </div>
          </div>

          {/* User Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 animate-slide-up">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
                  <p className="text-gray-600">{state.user?.name}</p>
                </div>
              </div>
            </div>

            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">{state.user?.email}</p>
                </div>
              </div>
            </div>

            <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  state.user?.isAdmin ? 'bg-amber-100' : 'bg-purple-100'
                }`}>
                  {state.user?.isAdmin ? (
                    <Shield className="h-6 w-6 text-amber-600" />
                  ) : (
                    <User className="h-6 w-6 text-purple-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Role</h3>
                  <p className={`font-medium ${
                    state.user?.isAdmin ? 'text-amber-600' : 'text-purple-600'
                  }`}>
                    {state.user?.isAdmin ? 'Administrator' : 'Regular User'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Role-specific Content */}
          <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {state.user?.isAdmin ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Admin Dashboard
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  You have administrator privileges. You can manage users, access system settings, 
                  and perform administrative tasks across the platform.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-amber-800">User Management</h4>
                    <p className="text-sm text-amber-600">Manage user accounts</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-amber-800">System Settings</h4>
                    <p className="text-sm text-amber-600">Configure system options</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-amber-800">Analytics</h4>
                    <p className="text-sm text-amber-600">View system analytics</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-10 w-10 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  User Dashboard
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Welcome to your user dashboard! Here you can manage your profile, 
                  view your activity, and access the features available to you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-blue-800">Profile Settings</h4>
                    <p className="text-sm text-blue-600">Update your information</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-blue-800">Activity History</h4>
                    <p className="text-sm text-blue-600">View your recent activity</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-blue-800">Preferences</h4>
                    <p className="text-sm text-blue-600">Customize your experience</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;