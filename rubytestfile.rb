text = []
File.read('adjective.txt').each_line do |line|
  text << line.chop.upcase!
end

File.write('adjective.js', text)
