def lengthOfLongestSubstring(s: str) -> int:
  inicio = 0 #apuntador uno
  caracteresAposicion = {} #cambia el reinicio del apuntador uno
  mayorLongitud = 0
  
  for fin in range(len(s)):  # apuntador dos: fin
    if s[fin] in caracteresAposicion and inicio <= caracteresAposicion[s[fin]]: #es un duplicado y inicio <= donde está la posición final
      #inicio = s[fin] + 1
      inicio = caracteresAposicion[s[fin]] + 1
    caracteresAposicion[s[fin]] = fin
    mayorLongitud = max(mayorLongitud, fin - inicio + 1)
  return mayorLongitud


print(lengthOfLongestSubstring('abcabcbb'))
print(lengthOfLongestSubstring('jdkafnlcdsalkxcmpoiuytfccv'))


