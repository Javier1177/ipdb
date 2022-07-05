import { useNavigate } from 'react-router-dom';

/**
 * Returns a function that let you navigate to the route that you pass without reloading the page, just changing components.
 * @example
 * useNavigation('/')
 * // () => navigate('/')
 * @example
 * useNavigation('/checkout')
 * // () => navigate('/checkout')
 * @returns {Function} Returns the function that let you navigate to the param that you pass.
 */
export const useNavigation = route => {
  const navigate = useNavigate();
  return () => navigate(route);
};
