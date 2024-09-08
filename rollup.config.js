export default async args => {
  const result = args.configDefaultConfig;
  result.forEach(async (config) => {
    config.onwarn = (warning, warn) => {
      if (warning.code === 'EVAL') return;
      warn(warning);
    };
  });
  return result;
};
