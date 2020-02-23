# Program that formats makefiles

import sys


# Display arguments 
print "Number of arguments :" + str(len(sys.argv)) + " arguments"
print "Arguments: " + str(sys.argv)

# Variables
targetFile = sys.argv[1]



# Create new file in current directory
def createMakefile():
    f = open("makefile", "w+")

    
# Function that checks for extension


# Function that writes the basics of the makefile
def universalOut():
    f.wriet("nothing")

# Function that writes clean to file
def macClean(language):
    f.write("clean:\n")
    f.write("     rm *.dll\n")
    f.write("     rm *.")
    
# Function that writes clean to file
def winClean():
    f.write()

# Function that gets the language
def getLanguage():
    return

# Function that writes the target file, and the included parameters
def target():
    f.write(repr(targetFile) + ':\n')
    






