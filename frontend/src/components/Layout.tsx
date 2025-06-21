import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, Shield, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { state, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {state.user?.isAdmin ? (
                  <Shield className="h-6 w-6 text-amber-600" />
                ) : (
                  <User className="h-6 w-6 text-primary-600" />
                )}
                <span className="text-xl font-bold text-gray-900">
                  Auth System
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {state.user?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {state.user?.isAdmin ? 'Administrator' : 'User'}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  state.user?.isAdmin ? 'bg-amber-100' : 'bg-primary-100'
                }`}>
                  {state.user?.isAdmin ? (
                    <Shield className="h-5 w-5 text-amber-600" />
                  ) : (
                    <User className="h-5 w-5 text-primary-600" />
                  )}
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;